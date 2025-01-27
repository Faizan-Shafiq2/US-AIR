import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }, alt?: string } }) => {
      const { asset, alt } = value;
      const imageUrl = urlFor(asset._ref).url(); 
      return (
        <div className="image flex justify-center">
          <Image src={imageUrl} alt={alt || 'Image'} width={400} height={300}/>
        </div>

      );
    },
},

marks: {
    internalLink: ({ value, children }: { value: { reference: { slug: { current: string } } }, children: React.ReactNode }) => {
        const { reference } = value;
        const href = `/posts/${reference.slug.current}`; 
        return <a href={href}>{children}</a>;
    },
},
};
export default PortableTextComponent;
