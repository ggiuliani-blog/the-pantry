import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { Truck, Heart, Package, Droplet, Apple, Recycle, Globe, Users, Calendar, Handshake, Trophy, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-leaf-50">
        <div className="container-page py-16 sm:py-24 grid gap-6">
          <div className="flex items-center gap-3">
            <Truck className="w-10 h-10 text-leaf-700" />
            <h1 className="text-4xl sm:text-5xl font-bold text-leaf-800">Refill. Reuse. Repeat.</h1>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
            The Pantry — your local zero-waste grocery van bringing refillable staples and eco products to your street.
          </p>
          <div className="flex gap-3">
            <a href="#offerings" className="px-5 py-2.5 bg-leaf-700 text-white rounded-md">Find the Van</a>
            <Link href="/work-with-us" className="px-5 py-2.5 border border-leaf-700 text-leaf-700 rounded-md">
              Become a Franchisee
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="container-page py-16 scroll-mt-20">
        <div className="flex items-start gap-4 mb-4">
          <Heart className="w-8 h-8 text-leaf-700 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 max-w-3xl">
              To make sustainable, zero-waste shopping accessible and community-first. We bring refillable pantry staples,
              fresh produce, and low-impact lifestyle products directly to neighborhoods in a friendly, mobile format.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="bg-gray-50 scroll-mt-20">
        <div className="container-page py-16">
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dry staples', icon: Package },
              { name: 'Oils & vinegars', icon: Droplet },
              { name: 'Fresh produce', icon: Apple },
              { name: 'Eco tools', icon: Recycle }
            ].map(({ name, icon: Icon }) => (
              <div key={name} className="p-5 bg-white rounded-md border">
                <Icon className="w-6 h-6 text-leaf-700 mb-3" />
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-gray-600 mt-2">Refill by weight to cut packaging waste.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why" className="container-page py-16 scroll-mt-20">
        <div className="flex items-start gap-4">
          <Globe className="w-8 h-8 text-leaf-700 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
            <p className="text-gray-700 max-w-3xl">
              Reducing single-use packaging saves resources and keeps communities cleaner. Small changes — like refilling rice,
              beans, or soap — add up to a meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section id="community" className="bg-gray-50 scroll-mt-20">
        <div className="container-page py-16">
          <h2 className="text-2xl font-semibold mb-6">Community Highlights</h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-700">
            {[
              { text: 'Local market pop-ups and route stops', icon: Calendar },
              { text: 'Workshops on low-waste living', icon: Users },
              { text: 'Partnering with local producers', icon: Handshake },
              { text: 'Neighborhood refill challenges', icon: Trophy }
            ].map(({ text, icon: Icon }) => (
              <li key={text} className="p-5 bg-white rounded-md border flex items-start gap-3">
                <Icon className="w-5 h-5 text-leaf-700 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container-page py-16 scroll-mt-20">
        <div className="rounded-md border p-6 max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-6 h-6 text-leaf-700" />
            <h2 className="text-2xl font-semibold">Get in touch</h2>
          </div>
          <p className="text-gray-700 mb-6">Questions about stops, products, or partnerships? We'd love to hear from you.</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

