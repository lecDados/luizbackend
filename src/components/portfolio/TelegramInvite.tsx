import { Send, ArrowUpRight } from "lucide-react";
import botAvatar from "@/assets/telegram-bot-avatar.png.asset.json";

const BOT_URL = "https://t.me/Anuncios_filtrados_bot";
const BOT_HANDLE = "@Anuncios_filtrados_bot";

export function TelegramInvite() {
  return (
    <section id="telegram" className="px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-6 overflow-hidden rounded-xl border border-invite-edge bg-invite-surface p-6 shadow-card sm:grid-cols-[auto_1fr] sm:p-8 lg:grid-cols-[auto_1fr_auto]">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-invite-edge sm:mx-0 sm:h-28 sm:w-28"
            title="Abrir o bot no Telegram"
          >
            <img
              src={botAvatar.url}
              alt={`Perfil do bot ${BOT_HANDLE}`}
              loading="lazy"
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          </a>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-invite-muted">
              <span className="text-invite-accent">//</span> demonstração ao vivo
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
              Teste em tempo real
            </h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
              Entre no chat do bot e veja as ofertas do Mercado Livre chegando no
              Telegram na mesma hora. Qualquer mensagem que você enviar recebe
              resposta do sistema.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-invite-accent px-5 py-2.5 text-sm font-semibold text-invite-accent-foreground shadow-card transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden />
                Abrir chat no Telegram
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <span className="text-sm font-medium text-invite-muted">
                {BOT_HANDLE}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
