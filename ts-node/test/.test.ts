import anyTest, { TestInterface, ExecutionContext } from "ava"
import #name# from '../lib/#name#'

const test = anyTest as TestInterface<{
}>
test("#name# => ok", t=>{
  t.pass()
})
