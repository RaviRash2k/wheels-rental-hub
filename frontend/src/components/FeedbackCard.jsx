import React from "react"
import { Star } from "lucide-react"

const feedbackCard = ({ feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* user info */}
      <div className="flex items-center gap-4">
        <img
          src={feedback.image}
          alt={feedback.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-theme">{feedback.name}</h3>
          <p className="text-sm text-text/60">{feedback.location}</p>
        </div>
      </div>

      {/* rating */}
      <div className="flex gap-1 mt-4 text-text/60">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      {/* feedback */}
      <p className="mt-4 text-text/80 leading-relaxed text-sm">
        “{feedback.feedback}”
      </p>

    </div>
  )
}

export default feedbackCard
