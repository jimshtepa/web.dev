/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  pagination: {
    before: (videos) => {
      const elements = videos.reduce((a, c) => [...a, ...c.elements], []);
      return elements.map((e, i) => ({
        title: e.data.title,
        href: e.url,
        description: e.data.subhead,
        index: i,
        pages: elements.length,
        data: e.data,
      }));
    },
  },
};
