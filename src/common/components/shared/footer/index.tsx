export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gradient-to-b from-transparent to-gray-50 dark:from-transparent dark:to-darkBg/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <section className="max-w-[32rem]">
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
              Let's turn your ideas into reality and create something amazing
              together. Your next great project starts with a simple message!
            </p>
          </section>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:transition-all before:duration-300 text-black hover:text-white hover:bg-green-400 before:hover:bg-green-500 dark:text-white relative inline-block hover:scale-105 transform transition-transform">
                  <span className="relative animate-pulse hover:animate-none">
                    Contact
                  </span>
                </span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>

              <a
                href="#projects"
                className="rounded-sm dark:hover:text-white transition-colors"
              >
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:transition-all before:duration-300 text-black hover:text-white hover:bg-green-400 before:hover:bg-green-500 dark:text-white relative inline-block hover:scale-105 transform transition-transform">
                  <span className="relative animate-pulse hover:animate-none">
                    Projects
                  </span>
                </span>
              </a>
            </div>
            <small className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-bold">Mubashir Ahmad</span>. All rights
              reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
