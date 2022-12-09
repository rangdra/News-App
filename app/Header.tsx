import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import DarkModeBtn from './DarkModeBtn';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

function Header() {
  return (
    <header>
      <div className="grid items-center grid-cols-3 p-10">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{' '}
            <span className="underline decoration-6 decoration-orange-400">
              NEWS
            </span>{' '}
            App
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeBtn />
          <button className="hidden px-4 py-2 text-white rounded-full md:inline bg-slate-900 lg:px-6 lg:py-3 dark:bg-slate-800">
            Subscribe
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
