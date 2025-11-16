'use client'

import { useState, useEffect, startTransition } from 'react'

interface Comment {
  id: string
  name: string
  message: string
  date: string
}

export default function PlanetComments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  })

  // Load comments from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedComments = localStorage.getItem('website-comments')
      if (savedComments) {
        startTransition(() => {
          setComments(JSON.parse(savedComments))
        })
      }
    }
  }, [])

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    if (typeof window !== 'undefined' && comments.length > 0) {
      localStorage.setItem('website-comments', JSON.stringify(comments))
    }
  }, [comments])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      message: formData.message.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    setComments([newComment, ...comments])
    setFormData({ name: '', message: '' })
    alert('Thank you for your comment!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Comment Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="comment-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="comment-message" className="block text-sm font-medium text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="comment-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
              placeholder="Write your comment here..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg hover:shadow-xl"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Comments ({comments.length})
        </h3>
        
        {comments.length === 0 ? (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/30 p-8 text-center">
            <p className="text-gray-400 text-lg">No comments yet. Be the first to leave a comment!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {comment.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{comment.name}</h4>
                    <p className="text-sm text-gray-400">{comment.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-2">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

