import { QueryGames_games } from '../graphql/generated/QueryGames';
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
} from '../graphql/generated/QueryHome';

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(({ image, title, subtitle, button, ribbon }) => ({
    image: `http://localhost:1337${image?.url}`,
    title,
    subtitle,
    buttonLabel: button?.label,
    buttonLink: button?.link,
    ...(ribbon && {
      ribbon: ribbon.text,
      ribbonColor: ribbon.color,
      ribbonSize: ribbon.size,
    }),
  }));
};

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map(({ id, name, slug, developers, cover, price }) => ({
        id,
        title: name,
        slug,
        developer: developers[0].name,
        image: cover?.url
          ? `http://localhost:1337${cover?.url}`
          : 'https://i.stack.imgur.com/y9DpT.jpg',
        price,
      }))
    : [];
};

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined,
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment,
      }
    : {};
};
