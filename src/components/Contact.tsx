
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="brutalist-section bg-white dark:bg-gray-900 relative">
      <div className="grain-overlay"></div>
      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl mb-12">
            <span className="bg-black dark:bg-gray-800 text-white px-2 py-1 brutal-box inline-block">Contato</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ScrollReveal delay={100}>
            <h3 className="text-xl font-bold mb-6">Entre em contato</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Interessado em trabalhar juntos ou tem alguma pergunta? Preencha o formulário ou use 
              os canais de contato direto abaixo.
            </p>
            
            <div className="space-y-6">
              <ScrollReveal delay={200} className="flex items-center">
                <div className="w-12 h-12 bg-secondary dark:bg-green-700 flex items-center justify-center mr-4 brutal-box">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">email@exemplo.com</span>
              </ScrollReveal>
              
              <ScrollReveal delay={300} className="flex mt-6 space-x-4">
                <a href="#" className="w-12 h-12 bg-black dark:bg-gray-800 flex items-center justify-center brutal-box">
                  <Github size={20} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black dark:bg-gray-800 flex items-center justify-center brutal-box">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black dark:bg-gray-800 flex items-center justify-center brutal-box">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black dark:bg-gray-800 flex items-center justify-center brutal-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm5 0a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  </svg>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={400} className="mt-8 pt-8 border-t-2 border-black dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black dark:bg-white"></div>
                  <span className="text-sm uppercase font-bold">Disponível para projetos</span>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="relative">
            <div className="brutal-box p-6 bg-white dark:bg-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-bold">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="brutalist-input brutal-box dark:bg-gray-700 dark:text-white"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="brutalist-input brutal-box dark:bg-gray-700 dark:text-white"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-bold">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="brutalist-input brutal-box dark:bg-gray-700 dark:text-white"
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="brutalist-button w-full brutal-box">
                  Enviar mensagem
                </Button>
              </form>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black dark:border-gray-700 -z-10"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
