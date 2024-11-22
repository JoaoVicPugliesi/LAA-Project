


const scriptsInEvents = {

	async FolhaDeEventos1_Event32(runtime, localVars)
	{
function buildGraph() {
  const graph = {};
  
  for (let i = 1; i <= 15; i++) {
    graph[i] = [];
    const leftChild = 2 * i;
    const rightChild = 2 * i + 1;
    const parent = Math.floor(i / 2);

    if (leftChild <= 15) graph[i].push(leftChild);
    if (rightChild <= 15) graph[i].push(rightChild);

    if (parent >= 1) graph[i].push(parent);
  }
  
  graph[5].push(6, 9);
  graph[6].push(5);
  graph[9].push(5);

  return graph;
}

function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const queue = [];

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[start] = 0;
  queue.push({ node: start, distance: 0 });

  while (queue.length > 0) {

    queue.sort((a, b) => a.distance - b.distance);
    const { node } = queue.shift();

    if (node === end) {
      const path = [];
      let current = end;

      while (current) {
        path.unshift(parseInt(current));
        current = previous[current];
      }

      return path;
    }

    graph[node].forEach((neighbor) => {
      const newDistance = distances[node] + 1;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = node;
        queue.push({ node: neighbor, distance: newDistance });
      }
    });
  }

  return [];
}

function calculateShortestPath() {
  const node_inicial = runtime.globalVars.node_inicial;
  const node_final = runtime.globalVars.node_final;

  if (node_inicial > 0 && node_final > 0) {
    const graph = buildGraph();
    const path = dijkstra(graph, node_inicial, node_final);

    return path;
  }
}

const result = calculateShortestPath();


if (result) {
  const boneco = runtime.objects.Sprite.getFirstInstance();
  boneco.isVisible = true;
}

function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = cx - ex;
  return (Math.atan2(dx, dy) * 180) / Math.PI;
}

window.caminhou = window.caminhou || false;
window.caminhos = [];

const boneco = runtime.objects.Sprite.getFirstInstance();

result?.forEach((index, i) => {
  const spriteName = `s${index}`;
  const sprite = runtime.objects[spriteName];
  const spriteInstance = sprite.getFirstInstance();

  let x = window.caminhos[window.caminhos.length - 1]?.[0] || 0;
  let y = window.caminhos[window.caminhos.length - 1]?.[1] || 0;

  if (i === 0) {
    x = spriteInstance.x;
    y = spriteInstance.y;

    window.caminhos.push([x, y, 0]);
  } 
  else {
    const angleBoneco = angle(x, y, spriteInstance.x, spriteInstance.y);

    const dX = (spriteInstance.x - x) / 100;
    const dY = (spriteInstance.y - y) / 100;

    for (let i = 0; i < 100; i++) {
      window.caminhos.push([x, y, angleBoneco]);

      x += dX;
      y += dY;
    }
  }

  if (i && i !== result.length - 1) {
    spriteInstance.colorRgb = [125, 0, 255];
  }
});

if (!window.caminhou) {
  window.caminhou = true;
  let i = 0;

  setInterval(() => {
    const [x, y, angleBoneco] = window.caminhos[i];

    boneco.x = x;
    boneco.y = y;
    boneco.angleDegrees = angleBoneco;

    i++;
  }, 10);
}

	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

