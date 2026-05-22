import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { Settings, LogOut, Plus, Trash2, Edit2, CheckCircle, XCircle } from 'lucide-react';

export default function AdminPanel() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) loadData();
    });
    return unsub;
  }, []);

  const loadData = async () => {
    try {
      const snap = await getDocs(collection(db, 'projects'));
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setProjects(list);
    } catch (e) {
      console.error(e);
      setTimeout(() => alert("Permission denied or db error. Are you an admin?"), 100);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (e: any) {
      alert("Error: " + e.message);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) return <div className="min-h-screen text-white bg-black flex items-center justify-center">Loading...</div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <Settings className="w-16 h-16 opacity-50 mb-6" />
        <h1 className="text-3xl font-bold font-sans mb-4">Admin Panel</h1>
        <p className="text-[#D7E2EA] mb-8 font-light">Login required to access this area.</p>
        <button onClick={handleLogin} className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90">
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-[#D7E2EA] p-6 lg:p-12 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Settings className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-60 text-sm">{user.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6 flex justify-between items-center">
          Projects Content
          <button 
            onClick={async () => {
              const title = prompt("Enter project title");
              if (title) {
                await addDoc(collection(db, 'projects'), { title });
                loadData();
              }
            }}
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" /> Add Project
          </button>
        </h2>

        <div className="grid gap-4">
          {projects.map(p => (
            <div key={p.id} className="p-4 bg-white/5 rounded-xl flex justify-between items-center border border-white/10">
              <span className="font-medium text-lg">{p.title}</span>
              <div className="flex gap-2">
                <button 
                  onClick={async () => {
                    const newTitle = prompt("Edit title:", p.title);
                    if (newTitle) {
                      await updateDoc(doc(db, 'projects', p.id), { title: newTitle });
                      loadData();
                    }
                  }} 
                  className="p-2 bg-white/10 rounded hover:bg-white/20"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={async () => {
                    if (confirm("Delete?")) {
                      await deleteDoc(doc(db, 'projects', p.id));
                      loadData();
                    }
                  }} 
                  className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="text-center p-8 bg-white/5 border border-white/10 border-dashed rounded-xl opacity-60">
              No content found. Please add something.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
