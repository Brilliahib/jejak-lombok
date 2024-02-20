import { Fragment, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../assets/img/logo-notext.png";

const navigation = [
  { name: "Beranda", href: "/", current: false },
  { name: "Tentang", href: "/about", current: false },
  { name: "Destinasi", href: "/destinasi", current: false },
  { name: "Shop", href: "/shop", current: false },
  { name: "Paket Wisata", href: "/shop/paket-wisata", current: false },
  { name: "Chat", href: "/chat", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 transition-all ${
        isScrolled ? "bg-white text-slate-900" : "text-slate-900"
      }`}
      style={{ zIndex: 999, paddingTop: isScrolled ? 0 : "30px" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center px-3 sm:px-0 sm:items-stretch sm:justify-between">
                <a href="/" className="flex flex-shrink-0 items-center gap-4">
                  <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                  <div>
                    <h1 className="text-md font-black">JEJAK LOMBOK</h1>
                  </div>
                </a>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative">
                        <Disclosure.Button
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-sky-900 text-white"
                              : "text-slate-900 hover:bg-sky-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium",
                            isScrolled && "text-slate-900",
                            item.subItems && "cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                        {item.subItems && (
                          <Disclosure.Panel className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md">
                            <div className="py-1">
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? "bg-sky-900 text-white"
                                      : "text-slate-900 hover:bg-sky-700 hover:text-white",
                                    "block px-4 py-2 text-sm cursor-pointer"
                                  )}
                                  aria-current={
                                    subItem.current ? "page" : undefined
                                  }
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute top-16 left-0 right-0 bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {item.subItems ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-slate-900 rounded-md hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="sm:hidden">{item.name}</span>
                            <span className="hidden sm:block">{item.name}</span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1 pt-2 pb-3 pl-6 pr-2">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className={classNames(
                                  subItem.current
                                    ? "bg-sky-900 text-white"
                                    : "text-slate-900 hover:bg-sky-700 hover:text-white",
                                  "block px-3 py-2 rounded-md text-base font-medium"
                                )}
                                aria-current={
                                  subItem.current ? "page" : undefined
                                }
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-sky-900 text-white"
                          : "text-slate-900 hover:bg-sky-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
