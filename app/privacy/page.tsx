import { title } from "@/components/primitives";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className={title()}>Adatvédelmi Nyilatkozat</h1>
      <p className="text-justify">
        Ez az adatvédelmi nyilatkozat ismerteti, hogyan kezeljük a
        webalkalmazásunk használata során gyűjtött adatokat. A Kiss-Hanzsa Kft.
        elkötelezett az Ön személyes adatainak védelme mellett, és mindent
        megteszünk annak érdekében, hogy biztosítsuk azok biztonságát.
      </p>

      <h2>1. Az alkalmazás által gyűjtött adatok</h2>
      <p className="text-justify">
        A webalkalmazásunk használata során semmilyen személyes adatot nem
        gyűjtünk, tárolunk vagy dolgozunk fel. Az alkalmazás kizárólag két
        dátumot (tól-ig) kér be a felhasználóktól, és ezek nem kerülnek
        tárolásra vagy továbbításra.
      </p>

      <h2>2. Látogatói statisztikák</h2>
      <p className="text-justify">
        A webalkalmazásunk a Google és a Microsoft szolgáltatásait használja az
        oldal látogatói statisztikáinak gyűjtésére. Az általuk gyűjtött adatok
        névtelenek, és nem tartalmaznak személyes információkat. A céljuk
        kizárólag az oldal teljesítményének javítása, valamint a felhasználói
        élmény optimalizálása.
      </p>

      <h2>3. Az Ön adatainak védelme</h2>
      <p className="text-justify">
        A webalkalmazásunk nem tárol semmilyen személyes adatot, így nem
        szükséges további intézkedéseket tennünk az adatbiztonság érdekében. Az
        összegyűjtött statisztikai adatok kizárólag névtelenek, és nem kerülnek
        harmadik fél számára hozzáférhetővé.
      </p>

      <h2>4. Sütik (Cookies)</h2>
      <p className="text-justify">
        A webalkalmazásunk sütiket használ a látogatói statisztikák gyűjtésére,
        a felhasználói élmény javítására. A sütik nem tartalmaznak személyes
        adatokat, és kizárólag a weboldal működéséhez szükségesek.
      </p>

      <h2>5. Kapcsolat</h2>
      <p className="text-justify">
        Amennyiben kérdései merülnének fel az adatkezelésünkkel kapcsolatban,
        kérjük, vegye fel velünk a kapcsolatot az alábbi elérhetőségen:
      </p>
      <p>Email: info@kisshanzsa.hu</p>

      <h2>6. A nyilatkozat módosítása</h2>
      <p className="text-justify">
        Fenntartjuk a jogot, hogy az adatvédelmi nyilatkozatunkat bármikor
        módosítsuk. A módosításokat a weboldalon közzétesszük, és az új verzió
        azonnal érvénybe lép. Kérjük, hogy rendszeresen ellenőrizze az
        adatvédelmi nyilatkozatunkat a legfrissebb információkért.
      </p>

      <h2>7. Jogszabályoknak való megfelelés</h2>
      <p className="text-justify">
        A Kiss-Hanzsa Kft. az adatvédelmi jogszabályoknak megfelelően kezeli az
        összes adatot, és biztosítja a GDPR és egyéb vonatkozó törvények
        betartását.
      </p>
    </div>
  );
}
