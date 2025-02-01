import { Inter, Lusitana  } from 'next/font/google';

 
export const inter = Inter({ subsets: ['latin'] });

 
// Configure the Lusitana font
export const lusitana = Lusitana({
    weight: ['400', '700'], // Specify the weights you need
    subsets: ['latin'],
    variable: '--font-lusitana', // Optional: for CSS variables
  });