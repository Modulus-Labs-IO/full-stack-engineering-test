'use client';

import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/app/utils/enums';

export default function Navbar() {
  const { user, role, logout } = useAuth();

  return (
    <nav className='bg-background border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold'>
          Our Store
        </Link>
        <div className='flex items-center space-x-4'>
          {user && role === UserRole.MERCHANT ? (
            <Link href='/dashboard/merchant' className='text-foreground hover:text-primary'>
              Dashboard
            </Link>
          ): (
            <Link href="/dashboard/user" className="text-foreground hover:text-primary">
              User Dashboard
            </Link>
          )}
          {user ? (
            <>
              <span className='text-foreground pr-5'>Welcome, {user.name}</span>
              <Button variant='destructive' onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href='/login'>
                <Button variant='ghost'>Login</Button>
              </Link>
              <Link href='/signup'>
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

