import { PartialType } from "@nestjs/mapped-types"
import { AphorismDto } from "./aphorism.dto"

export class UpdateAphorismDto extends PartialType(AphorismDto) {}
