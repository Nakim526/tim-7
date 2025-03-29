import Row from "@/components/elements/Row";
import PageView from "@/components/layouts/PageView";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

export default function Home() {
  return (
    <>
      <PageView />
      <div className="h-max bg-amber-50 w-full md:p-20 p-8">
        <div className="flex flex-col gap-4 pb-10 items-center">
          <h1>Apa itu Tim7?</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repellat soluta iste, ab rem, quasi quae animi aliquam corporis
            reprehenderit omnis libero provident itaque maiores? Voluptates
            veritatis quas dignissimos quae assumenda corporis sit dolorum
            asperiores quaerat tempora delectus enim eaque sed, praesentium
            laudantium! Eum vitae, facere consequuntur dolores commodi odit
            praesentium cupiditate ducimus possimus ut quam at ipsa earum magni
            placeat eos. Nulla consequatur voluptatum ea ad quaerat unde ipsa
            velit ab quo amet cumque eaque ipsum, similique quia excepturi
            libero architecto. Ullam, placeat ex id delectus aperiam, sit,
            voluptate vero asperiores perspiciatis dicta molestiae sunt culpa.
            Itaque, doloremque delectus.
          </p>
        </div>
        <h1 className="text-center">Alamat</h1>
        <div className="flex flex-col md:flex-row gap-8 my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3973.819663906391!2d119.49854657498213!3d-5.132725694844465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDcnNTcuOCJTIDExOcKwMzAnMDQuMCJF!5e0!3m2!1sen!2sid!4v1743255289990!5m2!1sen!2sid"
            className="w-full md:w-[50%] h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="w-full md:w-[50%]">
            <h4>
              Jl. Tamalanrea Selatan 5 No.85, Tamalanrea, Kec. Tamalanrea, Kota
              Makassar, Sulawesi Selatan 90245, Indonesia
            </h4>
          </div>
        </div>
        <h1 className="text-center">Hubungi Kami</h1>
        <div className="flex flex-col md:flex-row gap-8 my-5">
          <form
            action=""
            className="flex flex-col gap-4 w-full md:w-[50%] items-center"
          >
            <div className="flex md:flex-row flex-col gap-4 w-full">
              <input type="text" placeholder="Nama" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subjek" />
            <textarea
              name=""
              placeholder="Pesan"
              id=""
              style={{ height: "150px" }}
            />
            <button type="submit" className="cursor-pointer">
              Kirim
            </button>
          </form>
          <div className="flex flex-col gap-2 w-full md:w-[50%]">
            <h3>E-Mail</h3>
            <p>contoh@example.com</p>
            <h3 className="pt-4 ">Telepon</h3>
            <p>+62 857-8757-2305</p>
            <h3 className="pt-4 ">Media Sosial</h3>
            <Row css="gap-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/me7angkasa?igsh=MXE4ZW0xMW15ODN0dA=="
              >
                <FaIcons.FaInstagram className="icon text-2xl" />
              </Link>
              <FaIcons.FaTwitter className="icon text-2xl" />
              <FaIcons.FaFacebook className="icon text-2xl" />
              <FaIcons.FaYoutube className="icon text-2xl" />
              <FaIcons.FaTiktok className="icon text-2xl" />
            </Row>
            <h4 className="pt-4 ">#SampaiJumpaDimanaMana</h4>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
