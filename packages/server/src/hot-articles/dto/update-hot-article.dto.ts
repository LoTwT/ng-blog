import { PartialType } from "@nestjs/mapped-types"
import { CreateHotArticleDto } from "./create-hot-article.dto"

export class UpdateHotArticleDto extends PartialType(CreateHotArticleDto) {}
