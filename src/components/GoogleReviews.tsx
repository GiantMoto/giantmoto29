import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    author: "Marcin Kowalski",
    rating: 5,
    content: "Profesjonalna obsługa, świetne efekty po chiptuningu. Polecam każdemu, kto szuka solidnej firmy!",
    date: "2024-02-15"
  },
  {
    author: "Anna Nowak",
    rating: 5,
    content: "Bardzo zadowolona z usługi. Auto ma teraz znacznie lepsze osiągi, a spalanie faktycznie spadło.",
    date: "2024-02-10"
  },
  {
    author: "Piotr Wiśniewski",
    rating: 5,
    content: "Świetna robota przy DPF OFF. Wszystko działa jak należy, obsługa na najwyższym poziomie.",
    date: "2024-01-28"
  }
];

export default function GoogleReviews() {
  return (
    <div className="bg-[#0A0A0A] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 text-glow">
          Zobacz zdanie naszych klientów
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-[#111111] p-6 rounded-lg border border-red-600/20 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="text-red-600 w-5 h-5" />
                  <span className="text-white font-semibold">{review.author}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-red-600" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 mb-4">{review.content}</p>
              <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('pl-PL')}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-xl text-gray-300">To coś, co udowadnia, że można nam ufać.</p>
          <Link 
            to="/kontakt" 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transform hover:scale-105"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}