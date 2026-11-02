import { Send, ArrowUpRight } from "lucide-react";
import botAvatar from "@/assets/telegram-bot-avatar.png.asset.json";

const BOT_URL = "https://t.me/Anuncios_filtrados_bot";
const BOT_HANDLE = "@Anuncios_filtrados_bot";

export function TelegramInvite() {
  return (
    <section id="telegram" className="px-6 py-10">
      <div className="mx-auto max-w-[960px]">
        <div className="flex flex-col items-start gap-5 overflow-hidden rounded-xl border border-invite-edge bg-invite-surface p-6 shadow-card sm:flex-row sm:items-center sm:gap-6 sm:p-8 lg:justify-center lg:gap-10">
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-invite-edge sm:h-28 sm:w-28"
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
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
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
    </section>
  );
}
