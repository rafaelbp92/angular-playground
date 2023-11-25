import { TestBed } from "@angular/core/testing";
import { UtilService } from "./utils.service";

describe('UtilService', () => {
    let utilService: UtilService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UtilService]
        }).compileComponents();

        utilService = TestBed.inject(UtilService);
    });

    it('create service', () => {
        expect(utilService).toBeTruthy();
    });
    
    describe('getLettersArray', () => {
        it('should return the letters of a tring as array', () => {
            let result = utilService.getLettersArray('test');

            expect(result).toEqual(['t', 'e', 's', 't']);
        })

        it('should return the empty array if string is null or undefined', () => {
            let result = utilService.getLettersArray();

            expect(result).toEqual([]);
        })
    })
});