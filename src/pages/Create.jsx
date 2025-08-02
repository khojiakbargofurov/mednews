import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    author: '',
    imgUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Option 1: Use local time
      const now = new Date();
      const localISOString = new Date(
        now.getTime() - now.getTimezoneOffset()
      ).toISOString();
      const firestoreDate = Timestamp.fromDate(new Date(localISOString));

      await addDoc(collection(db, 'transactions'), {
        title: form.title,
        description: form.description,
        author: form.author,
        imgUrl: form.imgUrl || '',
        date: firestoreDate,
        createdAt: serverTimestamp(),
      });

      navigate('/');
    } catch (error) {
      console.error('Error adding document:', error);
      alert('Failed to create transaction.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl text-black text-center font-bold mb-4">Create New Transaction</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered"
          required
        />
        <textarea
          name="description"
          rows="4"
          className="textarea textarea-bordered"  
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="author"
          type='text'
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="input input-bordered"
          required
        />
        <input
          name="imgUrl"
          type="email"
          value={form.imgUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default Create;
