import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, MapPin, Facebook, Gauge, Wrench, Zap, Fuel, MapPinned } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  carImage: string;
  graphImage: string;
  slug: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Chiptuning Opel Astra H 1.3 CDTI – Więcej Mocy, Mniej Spalania!',
    description: 'Odkryj, jak zwiększyliśmy moc i moment obrotowy w Oplu Astra H, jednocześnie optymalizując zużycie paliwa.',
    date: '2025-03-22',
    image: 'https://raw.githubusercontent.com/GiantMoto/giantmoto29/main/OpelAstra.jpg',
    carImage: 'https://raw.githubusercontent.com/GiantMoto/giantmoto29/main/OpelAstra.jpg',
    graphImage: 'https://raw.githubusercontent.com/GiantMoto/giantmoto29/main/OpelAstraPomiary.jpg',
    slug: 'chiptuning-opel-astra-h',
    content: `Czy Twój Opel Astra H 1.3 CDTI 90KM wydaje się nieco ospały? Marzysz o dynamiczniejszej jeździe, 
    lepszej elastyczności silnika i niższym spalaniu? Mamy dla Ciebie idealne rozwiązanie – profesjonalny 
    chiptuning w Giant Motorsport!...`
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedPost) {
    return (
      <div className="bg-[#0A0A0A] pt-16">
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-red-600 hover:text-red-400 mb-8 flex items-center"
          >
            ← Wróć do listy
          </button>
          
          {/* Full blog post content */}
          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">{selectedPost.title}</h1>
            <p className="text-red-600 mb-6">{new Date(selectedPost.date).toLocaleDateString('pl-PL')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img
                src={selectedPost.carImage}
                alt="Car"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(selectedPost.carImage)}
              />
              <img
                src={selectedPost.graphImage}
                alt="Performance Graph"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(selectedPost.graphImage)}
              />
            </div>
            
            <div className="text-gray-300 space-y-4">
              <p>{selectedPost.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-white mb-12">Blog</h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111111] border border-red-600/20 text-white px-4 py-2 pl-12 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600 w-5 h-5" />
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Najnowsze posty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <div 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-[#111111] rounded-lg overflow-hidden border border-red-600/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] cursor-pointer"
              >
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-red-600 text-sm mb-2">{new Date(post.date).toLocaleDateString('pl-PL')}</p>
                  <h3 className="text-white font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-400 line-clamp-2">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage} 
              alt="Powiększone zdjęcie" 
              className="w-full h-auto"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}