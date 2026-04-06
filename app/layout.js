import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
  title: 'Uber Workspace Concept',
  description:
    'A concept app to help Uber employees manage office travel, desk and room bookings, team collaboration, social events, and office access.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-secondary/20">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
