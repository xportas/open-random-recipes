"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!pending && state && state.error === null) {
      router.replace("/");
    }
  }, [state, pending, router]);

  return (
    <main className="w-full flex-1 bg-surface text-on-surface flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-surface-container-low via-surface to-surface opacity-70 pointer-events-none z-0" />

      <div className="w-full max-w-md px-margin-mobile z-10 flex flex-col items-center">
        <div className="w-full mb-lg flex justify-center">
          <Image
            src="/opr-banner.png"
            alt="Culinary Fresh Open Random Recipes Logo"
            width={300}
            height={100}
            className="w-full max-w-[300px] h-auto object-contain drop-shadow-[0_8px_24px_rgba(211,97,53,0.05)]"
            priority
          />
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_32px_-12px_rgba(60,105,43,0.08)] p-md w-full max-w-sm flex flex-col items-center border border-surface-variant/50">
          <h1 className="font-headline-sm text-headline-sm text-center text-on-surface mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-center mb-md">
            Introduce tu contraseña para acceder
          </p>

          <form action={formAction} className="w-full flex flex-col gap-sm">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                <span
                  className="material-symbols-outlined text-outline-variant text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Contraseña"
                required
                disabled={pending}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-sm pl-10 pr-10 font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-sm flex items-center"
                tabIndex={-1}
              >
                <span
                  className="material-symbols-outlined text-outline-variant text-[20px] hover:text-on-surface-variant transition-colors"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            {state?.error != null && (
              <p className="text-error font-label-sm text-label-sm text-center">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="mt-sm w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md py-sm px-md rounded-full shadow-[0_4px_12px_rgba(60,105,43,0.2)] hover:shadow-[0_6px_16px_rgba(60,105,43,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-xs disabled:opacity-50 disabled:active:scale-100"
            >
              <span>{pending ? "Verificando..." : "Entrar"}</span>
              {!pending && (
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_forward
                </span>
              )}
            </button>
          </form>

          <button className="mt-md text-primary font-label-sm text-label-sm hover:text-on-primary-fixed-variant underline underline-offset-2 transition-colors">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </main>
  );
}
