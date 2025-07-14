import { flattenEach } from '@turf/turf';

/**
 * Extract all polygons from a Feature or geometry object.
 * @param {GeoJSON.Feature<GeoJSON.Polygon|GeoJSON.MultiPolygon>} feature
 * @returns {GeoJSON.Feature<GeoJSON.Polygon>[]} Array of polygon features
 */
function extractPolygons(feature) {
    const polygons = [];
  
    flattenEach(feature, (polyFeature) => {
      if (polyFeature.geometry.type === 'Polygon') {
        polygons.push(polyFeature);
      }
    });
  
    return polygons;
  }

export { extractPolygons };