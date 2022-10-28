import { Key } from 'react';

function FilmCard(props: { value: Key | null | undefined }): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" key={props.value}>
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
      </h3>
    </article>
  );
}

export default FilmCard;
