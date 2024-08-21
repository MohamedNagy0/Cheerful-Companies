import notFoundImg from "../../assets/images/notfound.webp";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <img src={notFoundImg} alt="not Found Img" className="mx-auto w-1/2" />
      </div>
    </>
  );
}
