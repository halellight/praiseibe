import { MetadataRoute } from 'next';
import { COMPENDIUM_DATA } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://praiseibe.com';

    // Base routes
    const routes = ['', '/wiki'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }));

    // Article routes
    const articles = COMPENDIUM_DATA.filter((item) => item.type === 'article').map((article) => ({
        url: `${baseUrl}/archive/${article.id}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.8,
    }));

    return [...routes, ...articles];
}
