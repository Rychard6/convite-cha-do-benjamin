import { Illustration } from "@/components/ui/Illustration";

/**
 * Elemento hero da tela de convite: título decorativo + ursinhos em destaque
 * (balão e avião), conforme a tela 1 do mockup de referência.
 */
export function InvitationHero() {
  return (
    <div className="relative flex w-full flex-col items-center text-center">
      <div className="relative mb-1 h-32 w-32 animate-fade-in-scale sm:mb-2 sm:h-48 sm:w-48">
        <Illustration
          src="characters/teddy-balloon.png"
          alt="Ursinho viajando em um balão de ar quente"
          className="h-full w-full animate-float"
          priority
          sizes="200px"
        />
      </div>

      <h1 className="font-script text-4xl font-semibold leading-tight text-green-dark sm:text-6xl">
        Chá do
        <br />
        Benjamin
      </h1>

      <div className="relative mt-2 h-16 w-28 animate-fade-in sm:mt-4 sm:h-24 sm:w-40">
        <Illustration
          src="characters/teddy-airplane.png"
          alt="Ursinho pilotando um aviãozinho"
          className="h-full w-full animate-sway"
          sizes="180px"
        />
      </div>
    </div>
  );
}
