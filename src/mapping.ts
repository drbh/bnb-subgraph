import {
  Transfer as TransferEvent,
  Burn as BurnEvent,
  Freeze as FreezeEvent,
  Unfreeze as UnfreezeEvent
} from "../generated/Contract/Contract"
import { Transfer, Burn, Freeze, Unfreeze } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.value = event.params.value
  entity.save()
}

export function handleFreeze(event: FreezeEvent): void {
  let entity = new Freeze(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.value = event.params.value
  entity.save()
}

export function handleUnfreeze(event: UnfreezeEvent): void {
  let entity = new Unfreeze(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.value = event.params.value
  entity.save()
}
