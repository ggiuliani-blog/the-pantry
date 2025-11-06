"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-leaf-700 flex items-center gap-2">
          <Leaf className="w-5 h-5" />
          The Pantry
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/#mission" className="hover:text-leaf-600">Mission</Link>
          <Link href="/#offerings" className="hover:text-leaf-600">Offerings</Link>
          <Link href="/#why" className="hover:text-leaf-600">Why It Matters</Link>
          <Link href="/#community" className="hover:text-leaf-600">Community</Link>
          <Link href="/work-with-us" className="font-medium text-leaf-700">Work with us</Link>
          <Link href="/shop" className="hover:text-leaf-600">Shop</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden p-2 rounded-md border text-leaf-700 hover:bg-leaf-50"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <nav id="mobile-nav" className="sm:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="container-page py-3 grid gap-2 text-sm">
            <Link href="/#mission" className="py-2 hover:text-leaf-600" onClick={() => setOpen(false)}>Mission</Link>
            <Link href="/#offerings" className="py-2 hover:text-leaf-600" onClick={() => setOpen(false)}>Offerings</Link>
            <Link href="/#why" className="py-2 hover:text-leaf-600" onClick={() => setOpen(false)}>Why It Matters</Link>
            <Link href="/#community" className="py-2 hover:text-leaf-600" onClick={() => setOpen(false)}>Community</Link>
            <Link href="/work-with-us" className="py-2 font-medium text-leaf-700" onClick={() => setOpen(false)}>Work with us</Link>
            <Link href="/shop" className="py-2 hover:text-leaf-600" onClick={() => setOpen(false)}>Shop</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

