import { useParams } from "react-router-dom";

export function ProductDetail() {
  const params = useParams();

  return (
    <div>ProductDetail - {params.id}</div>
  )
}
