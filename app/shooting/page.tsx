import { galleryPagePhotos } from "@/lib/constants";

export const metadata = {
  title: "Mathew Bushuru | Gallery",
};

export default function ShootingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Shooting
      </h1>

      <p className="mb-4 leading-7 lg:mb-6">
        Welcome to my personal gallery, a window to the world as I see it
        through my lens. I currently shoot with a Canon EOS250D paired with a
        prime 50mm f1.8 lens. I also have an 18-55mm and 55-250mm lens but I
        find myself mostly using the 50mm for its versatility and consistent
        performance.
      </p>

      <p className="mb-4 leading-7 lg:mb-6">
        Photography to me is about telling stories without words, exploring
        beauty in the ordinary, and freezing moments in time. I hope you enjoy
        browsing through these images as much as I enjoyed taking them.
      </p>
        <div className="masonry pt-4">
          {galleryPagePhotos.map((photo) => (
            <div className="masonry-item" key={photo.imageName}>
              <img
                src={`/shooting/${photo.imageName}`}
                alt={photo.imageName}
                loading="lazy"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
    </div>
  );
}
