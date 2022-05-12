import { Injectable } from "@nestjs/common"
import {
  CreateAphorismInput,
  FindAphorismsInput,
  UpdateAphorismInput,
} from "./dto/create-g-aphorism.input"

@Injectable()
export class GAphorismService {
  create(createAphorismInput: CreateAphorismInput) {
    return "This action adds a new gAphorism"
  }

  findSome(findAphorismsInput: FindAphorismsInput) {
    return `This action returns all gAphorism`
  }

  findOne(id: number) {
    return `This action returns a #${id} gAphorism`
  }

  update(updateGAphorismInput: UpdateAphorismInput) {
    return `This action updates a #${updateGAphorismInput.id} gAphorism`
  }

  remove(id: number) {
    return `This action removes a #${id} gAphorism`
  }
}
