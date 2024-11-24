import repoConfigTailwind from '@repo/config-tailwind'
import { Config } from 'tailwindcss'

export default {
    ...repoConfigTailwind,
    content: {
        ...repoConfigTailwind.content,
        files: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    },
} satisfies Config
