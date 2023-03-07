import { Inter } from "next/font/google";

// components
import Welcome from "@/components/welcome";
import Card from "@/components/card";
import WhyArtcryption from "@/components/whyArtcryption";
import Footer from "@/components/footer";
import ContactUs from "@/components/contactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Welcome />
      <Card />
      <WhyArtcryption />
      <ContactUs />
      <Footer />
    </>
  );
}
