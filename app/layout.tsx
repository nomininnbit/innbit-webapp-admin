import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: {
        template: '%s | Innbit - Flexible IoT Product Tracking App',
        default: 'Innbit - Flexible IoT Product Tracking App',
    },
};
const inter = Inter({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
