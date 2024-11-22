import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";

export const runtime = 'edge';

export default async function Page({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const productId = (await params).productId;
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ProductGallery
            mainImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800"
            // thumbnails={productData.thumbnails}
          />
          <div>
            <ProductInfo
              title="Product"
              price="$100"
              discount="Svae 2323r2"
              rating={1}
              reviews={23}
              description="Cool product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
