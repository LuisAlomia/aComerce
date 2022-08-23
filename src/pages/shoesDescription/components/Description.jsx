import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDescription from "../../../components/descriptionCard/components/CardDescription";
import { getIdProductsServices } from "../../../services/getProductServices";

const Description = () => {
  const [shoe, setShoe] = useState();
  const { id } = useParams();

  useEffect(() => {
    getIdProductsServices(id).then((resp) => setShoe(resp));
  }, [id]);

  return <div>{shoe && <CardDescription shoe={shoe} />}</div>;
};

export default Description;
