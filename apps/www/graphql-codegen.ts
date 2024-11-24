import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dotenvConfig = ['.env', '.env.development'].forEach(env =>
    dotenv.config({
        path: env,
    })
)

const config: CodegenConfig = {
    schema: `${process.env.VITE_API_URL}/graphql`,
    documents: ['**/*.gql'],
    ignoreNoDocuments: true,
    overwrite: true,
    generates: {
        './src/__generated__/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
                'jsdoc',
                {
                    add: {
                        content: `/* eslint-disable */`,
                    },
                },
                {
                    add: {
                        content: '// @ts-nocheck',
                    },
                },
            ],
        },
    },
}

export default config
