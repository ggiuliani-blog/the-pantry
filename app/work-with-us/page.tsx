import {
  TrendingUp,
  Coins,
  Wallet,
  Percent,
  Target,
  Gift,
  FileText,
  Rocket,
  Sparkles,
  Users,
  Heart,
  Shield,
  Award,
  Handshake,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Work with us — Franchise | The Pantry',
  description:
    'Join the zero-waste revolution. Explore investment, monthly costs, revenue, and how to apply.'
};

export default function FranchisePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-leaf-50 to-leaf-100">
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-10 h-10 text-leaf-700" />
              <Sparkles className="w-8 h-8 text-leaf-600" />
              <Heart className="w-10 h-10 text-leaf-700" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-leaf-800">
              Join The Zero-Waste Revolution.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Build a purpose-led business with The Pantry's mobile refill model. We provide guidance, brand, and
              playbooks to help you launch in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm">
                <Users className="w-4 h-4 text-leaf-700" />
                <span className="text-gray-700">Community Impact</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm">
                <Award className="w-4 h-4 text-leaf-700" />
                <span className="text-gray-700">Proven Model</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm">
                <Shield className="w-4 h-4 text-leaf-700" />
                <span className="text-gray-700">Full Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-16">
        {/* Key Figures */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Investment', value: '£45k–£63k', icon: Coins, color: 'text-blue-600' },
            { label: 'Monthly Costs', value: '£5k–£7.5k', icon: Wallet, color: 'text-amber-600' },
            { label: 'Revenue', value: '£10k–£23k/mo', icon: TrendingUp, color: 'text-green-600' },
            { label: 'Profit Margin', value: '15–30%', icon: Percent, color: 'text-leaf-700' }
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-lg border-2 border-gray-200 p-6 bg-white hover:border-leaf-300 hover:shadow-md transition-all">
              <div className={`${color} mb-3`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 mb-1">{label}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </section>

        {/* Why Franchise Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <Target className="w-12 h-12 text-leaf-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Why Franchise with The Pantry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a movement that's making a real difference while building a sustainable, profitable business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border-2 border-leaf-200 p-6 bg-gradient-to-br from-white to-leaf-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-leaf-700" />
                <h3 className="text-xl font-semibold">Why Franchise</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Tap into a growing eco market with a proven neighborhood-first model.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Growing sustainable market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Proven business model</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Purpose-driven opportunity</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-leaf-200 p-6 bg-gradient-to-br from-white to-leaf-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-leaf-700" />
                <h3 className="text-xl font-semibold">What You Get</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Brand assets, launch support, supplier network, operations playbook.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Complete brand package</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Ongoing training & support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Established supplier network</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-leaf-200 p-6 bg-gradient-to-br from-white to-leaf-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-leaf-700" />
                <h3 className="text-xl font-semibold">How to Apply</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Tell us about your location, experience, and motivation to get started.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Simple application process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Personal consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600 mt-0.5 flex-shrink-0" />
                  <span>Quick response time</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-gray-50 to-leaf-50 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="text-center mb-10">
            <Lightbulb className="w-12 h-12 text-leaf-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Your Success is Our Priority</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to helping you build a thriving, sustainable business that makes a positive impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: 'Partnership', desc: 'Work with a supportive team' },
              { icon: Users, title: 'Community', desc: 'Build local connections' },
              { icon: Award, title: 'Recognition', desc: 'Join an award-winning brand' },
              { icon: Shield, title: 'Security', desc: 'Proven, tested business model' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 bg-white rounded-lg border border-leaf-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf-100 mb-4">
                  <Icon className="w-8 h-8 text-leaf-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Join a community of entrepreneurs making a difference while building a profitable, sustainable business.
            </p>
            <a
              href="mailto:hello@thepantry.co.uk?subject=Franchise%20Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-leaf-700 text-white rounded-lg hover:bg-leaf-800 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Apply to Become a Franchisee
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              We'll get back to you within 48 hours
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

