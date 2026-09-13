import type { ProjectGallery } from "@/features/projects/types";
import resgaty from "@/features/projects/data/galleries/resgaty.json";
import copilotoBalcao from "@/features/projects/data/galleries/copiloto-balcao.json";
import gestaoRede from "@/features/projects/data/galleries/gestao-rede.json";
import bebelize from "@/features/projects/data/galleries/bebelize.json";
import clipou from "@/features/projects/data/galleries/clipou.json";
import peladaBot from "@/features/projects/data/galleries/pelada-bot.json";
import fullpageCapture from "@/features/projects/data/galleries/fullpage-capture.json";

export const galleriesByProject: Partial<Record<string, ProjectGallery>> = {
  "resgaty": resgaty,
  "copiloto-balcao": copilotoBalcao,
  "gestao-rede": gestaoRede,
  "bebelize": bebelize,
  "clipou": clipou,
  "pelada-bot": peladaBot,
  "fullpage-capture": fullpageCapture,
};
