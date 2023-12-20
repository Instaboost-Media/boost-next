import { Montserrat, Playfair } from 'next/font/google'
 
export const playfair = Playfair({
	weight: "800",
	subsets: ["latin"],
	display: "swap",
});

 
export const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})