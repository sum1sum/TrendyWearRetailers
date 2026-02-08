const Footer = () => {
  return (
    <footer className="bg-[#FDF0D5] text-[#003049] font-josefin py-16 px-8 md:px-24 border-t border-[#003049]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#C1121F] text-4xl font-bold tracking-tight">
            BEYOND
          </h2>
          <p className="text-xl font-medium border-b-2 border-[#003049]/30 pb-2 inline-block">
            The Destination for the Distinguished.
          </p>
          <p className="text-sm mt-4 opacity-80">
            © 2026 Beyond. All rights reserved.
          </p>
        </div>


        {/* Shop Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C1121F] text-xl font-bold">Shop</h3>
          <ul className="text-[#003049] flex flex-col gap-4 text-lg">
            <li><a href="#" className="hover:opacity-70 transition-opacity">Products</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">New In</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Sales</a></li>
          </ul>
        </div>

        {/* Account Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C1121F] text-xl font-bold">Account</h3>
          <ul className="text-[#003049] flex flex-col gap-4 text-lg">
            <li><a href="#" className="hover:opacity-70 transition-opacity">My Orders</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Shopping Cart</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#C1121F] text-xl font-bold">Support</h3>
          <ul className="text-[#003049] flex flex-col gap-4 text-lg">
            <li><a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Shipping Info</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Return</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">FAQ</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;