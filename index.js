/* vim: set ts=2 sw=2 et ai : */
/*
  icquai-msg
  Copyright (C) 2021 Menhera.org developers.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  @license Apache-2.0
*/

const {sphincs} = require('sphincs');
const ed = require('noble-ed25519');
const x25519 = require('curve25519-js');
const {sidh} = require('sidh');
require('es-first-aid');

