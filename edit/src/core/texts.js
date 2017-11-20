var acceptedlanguages = require('acceptedlanguages');

module.exports = function() {

  var defaultLang = 'en';
  var texts = {
    'sk': {
      newSerie: 'Nová séria',
      openSerie: 'Otvoriť sériu',
      save: 'Uložiť',
      discardChanges: 'Zahodiť zmeny',
      publish: 'Publikovať',
      import: 'Import',
      export: 'Export',
      tools: 'Nástroje',
      login: 'Prihlásiť sa',
      logout: 'Odhlásiť',
      openSerieDialogTitle: 'Otvoriť existujúcu sériu',
      importAlt: 'Podporované formáty: GeoJSON, TopoJSON, KML, CSV, GPX a OSM XML',
      addMapLayer: 'Pridať mapovú vrstvu',
      addMapLayerAlt: 'Pridá vlastnú podkladovú vrstvu',
      layerUrl: 'URL vrstvy',
      layerName: 'Názov vrstvy',
      zoomToFeatures: 'Priblížiť k mriežke',
      zoomToFeaturesAlt: 'Priblíži mapu k vytvorenej mriežke',
      clear: 'Zmazať',
      clearAlt: 'Odstráni mriežku z mapy',
      clearConfirm: 'Ste si istý, že chcete zmazať mriežku z mapy?',
      unexpectedError: 'Nastala neočakávaná chyba',
      newSerieDialogTitle: 'Vytvorenie novej série',
      newSerieDialogSerieTitle: 'Názov novej série',
      newSerieDialogSerieArea: 'Názov oblasti, do ktorej séria spadá',
      other: 'Iná',
      saveFailed: 'Uloženie zlyhalo. Nastala neočakávaná chyba',
      saveSuccess: 'Úspešne uložené',
      discardFailed: 'Zrušenie zmien zlyhalo. Nastala neočakávaná chyba',
      discardSuccess: 'Zmeny boli úspešné zrušené',
      publishFailed: 'Publikovanie zlyhalo. Nastala neočakávaná chyba',
      publishSuccess: 'Úspešne publikované',
      imported: 'Naimportovaných',
      features: 'geometrií',
      colsCount: 'Počet stĺpcov',
      rowsCount: 'Počet riadkov',
      gridDialogTitle: 'Vytvor mriežku',
      configParseError: 'Nastala chyba pri parsování súboru config',
      save: 'Uložiť',
      cancel: 'Zrušiť',
      authFailed: 'Autentizácia zlyhala',
      loginRequired: 'Musíte sa prihlásiť',
      beforeExit: 'Máte neuloženú prácu. Naozaj chcete opustiť stránku?',
      catalog: 'Katalogizovať',
      confirmChanges: 'Potvrď zmeny',
      specialCharacters: 'Špeciálne znaky',
      newColumn: 'Nový stĺpec',
      deleteColumn: 'Zmazať stĺpec',
      renameColumn: 'Premenovať stĺpec',
      fillColumn: 'Vyplniť stĺpec',
      deleteColumnConfirm: 'Naozaj chcete zmazať stĺpec',
      newNameColumnMsg: 'Nový názov pre',
      fillColumnMsg: 'Zadajte hodnotu ktorou sa vyplnia prázdne polia v stĺpci.',
      newColumnMsg: 'Názov nového stĺpca',
      switchToMap: 'Prepni na mapu',
      clearColumn: 'Vyprázdniť stĺpec',
      addColumnLeft: 'Pridať stĺpec vľavo',
      addColumnRight: 'Pridať stĺpec vpravo',
    },
	'cs': {
      newSerie: 'Nová kolekce',
      openSerie: 'Otevřít kolekci',
      save: 'Uložit',
      discardChanges: 'Zahodit změny',
      publish: 'Publikovat',
      import: 'Import',
      export: 'Export',
      tools: 'Nástroje',
      login: 'Přihlásit',
      logout: 'Odhlásit',
      openSerieDialogTitle: 'Otevřít existující kolekci',
      importAlt: 'Podporované formáty: GeoJSON, TopoJSON, KML, CSV, GPX a OSM XML',
      addMapLayer: 'Přidat mapovou vrstvu',
      addMapLayerAlt: 'Přidat vlastní podkladovou vrstvu',
      layerUrl: 'URL vrstvy',
      layerName: 'Název vrstvy',
      zoomToFeatures: 'Zobrazit síť',
      zoomToFeaturesAlt: 'Zobrazí síť pro všechny zadané listy',
      clear: 'Odstranit síť',
      clearAlt: 'Odstraní síť z mapy',
      clearConfirm: 'Opravdu chcete síť trvale odstranit?',
      unexpectedError: 'Nastala neočekávaná chyba',
      newSerieDialogTitle: 'Vytvořit novou kolekci',
      newSerieDialogSerieTitle: 'Název nové kolekce',
      newSerieDialogSerieArea: 'Zobrazené území',
      other: 'Jiná',
      saveFailed: 'Ukládání selhalo. Nastala neočekávaná chyba.',
      saveSuccess: 'Úspěšně uloženo',
      discardFailed: 'Zrušení změn selhalo. Nastala neočekávaná chyba.',
      discardSuccess: 'Změny byly úspěšné smazány',
      publishFailed: 'Publikování selhalo. Nastala neočekávaná chyba.',
      publishSuccess: 'Úspěšně publikováno. Změny se zobrazí po potvrzení správcem (mapy@mzk.cz)',
      imported: 'Bylo importováno',
      features: 'mapových listů',
      colsCount: 'Počet sloupců',
      rowsCount: 'Počet řádků',
      gridDialogTitle: 'Vytvoř síť',
      configParseError: 'Nastala chyba pri parsování souboru config',
      save: 'Uložit',
      cancel: 'Zrušit',
      authFailed: 'Autentizace selhala',
      loginRequired: 'Musíte se přihlásit',
      beforeExit: 'Máte neuloženou práci. Opravdu chcete opustit stránku a ztratit nově vytvořený obsah?',
      catalog: 'Katalogizovat',
      confirmChanges: 'Potvrď změny',
      specialCharacters: 'Speciální znaky',
      newColumn: 'Nový sloupec',
      deleteColumn: 'Smazat sloupec',
      renameColumn: 'Přejmenovat sloupec',
      fillColumn: 'Vyplnit sloupec',
      deleteColumnConfirm: 'Opravdu chcete smazat sloupec',
      newNameColumnMsg: 'Nový název pro',
      fillColumnMsg: 'Zadajte hodnotu, kterou se vyplní prázdná pole v sloupci.',
      newColumnMsg: 'Název nového sloupce',
      switchToMap: 'Přepni na mapu',
      clearColumn: 'Vyprázdniť stĺpec'
    },
    'en': {
      newSerie: 'New serie',
      openSerie: 'Open serie',
      save: 'Save',
      discardChanges: 'Discard changes',
      publish: 'Publish',
      import: 'Import',
      export: 'Export',
      tools: 'Tools',
      login: 'Login',
      logout: 'Logout',
      openSerieDialogTitle: 'Open existent serie',
      importAlt: 'GeoJSON, TopoJSON, KML, CSV, GPX and OSM XML supported',
      addMapLayer: 'Add map layer',
      addMapLayerAlt: 'Add a custom tile layer',
      layerUrl: 'Layer URL',
      layerName: 'Layer name',
      zoomToFeatures: 'Zoom to features',
      zoomToFeaturesAlt: 'Zoom to the extent of all features',
      clear: 'Clear',
      clearAlt: 'Delete all features from the map',
      clearConfirm: 'Are you sure you want to delete all features from this map?',
      unexpectedError: 'Unexpected error',
      newSerieDialogTitle: 'Create new serie',
      newSerieDialogSerieTitle: 'New serie title',
      newSerieDialogSerieArea: 'Name of area to which serie belongs',
      other: 'Other',
      saveFailed: 'Saving failed. Unexpected error occured',
      saveSuccess: 'Saved successfully',
      discardFailed: 'Discard failed. Unexpected error occured',
      discardSuccess: 'Changes was successfully discarded',
      publishFailed: 'Publishing failed. Unexpected error occured',
      publishSuccess: 'Published successfully',
      imported: 'Imported',
      features: 'features',
      colsCount: 'Number of cols',
      rowsCount: 'Number of rows',
      gridDialogTitle: 'Create grid',
      configParseError: 'Error occured during parsing of config file',
      save: 'Save',
      cancel: 'Cancel',
      authFailed: 'Authentication with GitHub failed',
      loginRequired: 'Login required',
      beforeExit: 'Your work is not saved. Are you sure you want to leave?',
      catalog: 'Catalog',
      confirmChanges: 'Confirm changes',
      specialCharacters: 'Special characters',
      newColumn: 'New column',
      deleteColumn: 'Delete column',
      renameColumn: 'Rename column',
      fillColumn: 'Fill column',
      deleteColumnConfirm: 'Delete column',
      newNameColumnMsg: 'New name for column',
      fillColumnMsg: 'Insert value',
      newColumnMsg: 'Name of the new column',
      switchToMap: 'Switch to map',
      clearColumn: 'Clear column'
    }
  };

  var result = null;
  acceptedlanguages.accepted.every(function(langCode) {
    var lang = langCode.split('-')[0];
    if (lang in texts) {
      result = lang;
      return false;
    }
    return true;
  });

  if (result === null) {
    result = defaultLang;
  }

  return texts[result];
};
