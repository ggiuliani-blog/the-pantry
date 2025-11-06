import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container-page py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">© {new Date().getFullYear()} The Pantry</p>
        <div className="text-gray-600 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:hello@thepantry.co.uk" className="hover:text-leaf-700">hello@thepantry.co.uk</a>
        </div>
      </div>
    </footer>
  );
}

