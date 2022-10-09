import dynamic from 'next/dynamic'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// TS error: Cannot find module 'components/DynamicButton' or its corresponding type declarations,
// but running "yarn dev" works fine.
const DynamicButton1 = dynamic(() => import('components/DynamicButton'));

// Argument of type '() => Promise<{ default: typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\"); }>' is not assignable to parameter of type 'DynamicOptions<{}> | Loader<{}>'.
// Type '() => Promise<{ default: typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\"); }>' is not assignable to type '() => LoaderComponent<{}>'.
// Type 'Promise<{ default: typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\"); }>' is not assignable to type 'LoaderComponent<{}>'.
// Type '{ default: typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\"); }' is not assignable to type 'ComponentType<{}> | { default: ComponentType<{}>; }'.
// Type '{ default: typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\"); }' is not assignable to type '{ default: ComponentType<{}>; }'.
// Types of property 'default' are incompatible.
// Type 'typeof import(\"/Users/majosolano/Desktop/nodenext-app/components/DynamicButton\")' is not assignable to type 'ComponentType<{}>'."

// On top of that, the development server crashes with a "Module not found" error.
const DynamicButton2 = dynamic(() => import('components/DynamicButton.jsx'));

// TS is happy, but the browser still shows a "Module not found" error.
const DynamicButton3 = dynamic(() => import('components/DynamicButton.jsx').then(({ default: button }) => button));

// Replacing the above examples with relative paths doesn't fix the error either.

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
