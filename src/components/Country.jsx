import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export const Country = ({
  country: { name, flag, capital, languages, population, currencies },
}) => {
  const formattedCapital =
    capital && capital.length > 0 ? (
      <>
        <b>Capital: </b>
        {capital}
      </>
    ) : (
      ""
    );
  const formattedLanguage = languages.length > 1 ? `Languages` : `Language`;
  const formattedCurrency =
    currencies && currencies.length > 1 ? `Currencies:` : `Currency:`;

  return (
    <Card
      style={{
        width: "25rem",
        height: "30rem",
        padding: "0",
      }}
    >
      <div className="row g-0">
        <CardImg
          style={{
            height: "14rem",
            objectFit: "cover",
          }}
          alt=""
          src={flag}
        />
        <CardBody
          style={{
            width: "16rem",
          }}
        >
          <CardTitle tag="h3">{name}</CardTitle>
          <CardText tag="h5" >
            {formattedCapital}
            <br />
            <b>{formattedLanguage}: </b>
            {languages.map((language) => language.name).join(", ")}
            <br />
            <b>Population: </b>
            {population.toLocaleString()}
            <br />
            <b>{currencies && formattedCurrency} </b>
            {currencies &&
              currencies.map((currency) => currency.name).join(", ")}
          </CardText>
        </CardBody>{" "}
      </div>
    </Card>
  );
};
